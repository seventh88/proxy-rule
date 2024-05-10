function FindProxyForURL(url, host) {
    // 使用代理服务器proxy.example.com，端口8080
    if (shExpMatch(host, '*.ip111.cn')) {
        return 'DIRECT';
    }
    return 'PROXY user-spugr93gcs-country-gb:p2yS3r2Hj_sdxFb9No@isp.smartproxy.com:10001';
}
