#!/bin/bash
web_root=/var/www/wedding
docker stop marry
docker rm marry
docker run --name marry -itd -p 80:80 -v $web_root:$web_root -v $web_root"/docker/nginx":/etc/nginx -v $web_root"/docker/php5":/etc/php5 -v $web_root"/docker/root":/root f17199f56bf0 sh /root/go.sh