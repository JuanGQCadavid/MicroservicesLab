

docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)


docker run -d -p 9411:9411 openzipkin/zipkin

docker run -d -p 9090:9090 -v  $(pwd)/NodeMicroservice/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus

docker build -t micro-img .

docker run --name micro-cont \
    -p 3000:3000 \
    micro-img

