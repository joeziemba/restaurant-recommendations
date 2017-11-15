require 'sinatra'
require 'json'
require 'pry'

CURRENT_FILE_PATH = File.dirname(__FILE__)

before do
  headers({ "Access-Control-Allow-Origin" => "*" })
end

def get_data
  data = JSON.parse(File.read(CURRENT_FILE_PATH + "/data.json"))
  return data
end

get '/api/v1/data' do
  data = get_data
  data.to_json
end

post '/api/v1/data/review' do
  data = get_data
  new_review = JSON.parse(request.body.read)
  data["reviews"] << new_review
  File.write("data.json", JSON.pretty_generate(data))

  return get_data
end

post '/api/v1/data/restaurant' do

end
