docker stop marry
docker rm marry
docker run --name marry -itd -p 80:80 -v /var/www/wedding:/var/www/wedding -v /var/www/wedding/docker/nginx:/etc/nginx -v /var/www/wedding/docker/php5:/etc/php5 -v /var/www/wedding/docker/root:/root f17199f56bf0 sh /root/go.sh