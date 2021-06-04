require 'json'
require 'logger'
require 'yaml'
require 'aws-sdk-sns'

file = File.read('./store.yml')
QA = YAML.load(file)
LAST_ID = QA.last['id']

def lambda_handler(event:, context:)
  @logger = Logger.new($stdout)

  if event['httpMethod'] == 'OPTIONS'
    options(event)
  else
    event['httpMethod'] == 'POST'
    post(event)
  end
end

def is_correct?(id = 1, answer)
  correct = element_by_id(id)
  return true if correct['answer'] == '*'

  correct['answer'].downcase == answer.downcase.chomp
end

def element_by_id(id)
  QA.select { |el| el['id'] == id.to_i }[0]
end

def options(event)
  @logger.info "OPTIONS with #{event}"
  {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": 'Content-Type, mode',
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'OPTIONS,POST,GET'
    }
  }
end

def store(data)
  sns = Aws::SNS::Resource.new(region: 'us-east-1')
  topic = sns.topic('arn:aws:sns:us-east-1:237177014511:trashpanda')
  topic.publish({ topic_arn: topic, subject: 'Trashpanda Winner',
                  message: "congratulations, you have a new winner #{data}" })
end

def post(event)
  data = JSON.parse(event['body'])
  @logger.info data
  next_element = {}
  if is_correct?(data.dig('id'), data.dig('answer'))
    if data.dig('id') == LAST_ID
      store(data.dig('answer'))
      next_element = element_by_id(data.dig('id').to_i)
      status = { status: 'success', message: 'You WIN!' }
    else
      next_element = element_by_id(data.dig('id').to_i + 1)
      status = { status: 'success', message: 'Correct!' }
    end
  else
    next_element = element_by_id(data.dig('id').to_i)
    status = { status: 'error', message: 'Incorrect Answer!' }
  end

  {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": 'Content-Type',
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'OPTIONS,POST,GET'
    },
    body: {
      id: next_element['id'],
      question: next_element['question'],
      final_question: next_element['final'],
      status: status
    }.to_json
  }
end
