docker run --name marry -itd -p 80:80 -v /var/www/codeigniter:/var/www/html -v /var/www/codeigniter/nginx/conf.d:/etc/nginx/conf.d  -v /var/www/codeigniter/nginx/sites-enabled:/etc/nginx/sites-enabled -v /var/www/codeigniter/nginx/global:/etc/nginx/global  -v /var/www/codeigniter/nginx/logs:/var/log/nginx c1a50756feb0 sh /root/run.sh