# codeigniter-project-template
###結構
    /public: 網站根目錄, nginx / apache根目錄設在此
    /docker: nginx, php設定檔所在地 執行docker script將會自動載入設定檔啟動伺服器
    /logs: 網站logs存放處 設定路徑 /docker/nginx/sites-enabled/*.conf #請參考nginx設定檔
    /script: 執行docker批次檔, 會將/docker目錄下的 nginx php設定載入docker容器並啟動伺服器
    /application, /system: codeigniter預設目錄
[預設使用的docker image](https://registry.hub.docker.com/u/sakilu/nginx_php59)<br />
