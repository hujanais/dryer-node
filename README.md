heroku container:login
heroku container:push web -a dryer-node
heroku container:release web -a dryer-node
https://dryer-node.herokuapp.com/

GET /data
{
"numOfPoints": 100
}
