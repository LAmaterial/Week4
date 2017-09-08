require "sinatra"
require "sinatra/json"
require "json"
# require "pry"

# You should not need to change the code in this file

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views"

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

# GET ARTICLES FROM ARTICLES.JSON
def read_articles
  JSON.parse(File.read("articles.json"))
end

# API ENDPOINTS
get "/api/v1/articles" do
  articles = read_articles

  content_type :json
  json articles
end

get "/api/v1/articles/:id" do
  articles = read_articles

  article = articles.find do |article|
    article["id"] == params[:id].to_i
  end

  content_type :json
  json article
end

post "/api/v1/articles" do
  current_articles = read_articles

  article = JSON.parse(request.body.read)
  article["id"] = current_articles.last["id"] + 1

  current_articles << article
  File.write("articles.json", JSON.pretty_generate(current_articles))

  content_type :json
  status 201
  json article
end

# SINATRA VIEWS ROUTES
get "/" do
  erb :index
end

get "/articles" do
  redirect "/"
end

get "/articles/new" do
  erb :new
end

get "/articles/:id" do
  @id = params[:id]
  erb :show
end
