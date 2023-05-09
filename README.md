# lemons
### docker network create
docker network create -d bridge mongodb

### mongodb container
docker run --network mongodb --name lemons-mongo -d -p 27017:27017 mongo:6.0.5-jammy

### mongosh container
docker run --name mongosh --network mongodb -it --rm mongo mongosh --host lemons-mongo test