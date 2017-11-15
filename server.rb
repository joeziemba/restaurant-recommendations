require 'sinatra'
require 'json'
require 'pry'

CURRENT_FILE_PATH = File.dirname(__FILE__)

before do
  headers({ "Access-Control-Allow-Origin" => "*" })
end

def get_data
  data = File.read(CURRENT_FILE_PATH + "/data.json")
  return data
end

get '/api/v1/data' do
  get_data
end

post '/api/v1/data' do

end
