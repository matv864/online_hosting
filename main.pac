function FindProxyForURL(url, host)
{
    list_of_proxy = [
        "62.201.219.58:8585",
        "185.165.56.67:8080",
        "91.65.94.145:80"
    ]
    len_of_list_of_proxy = list_of_proxy.length
    t = new Date().getSeconds()
    proxy_now = list_of_proxy[t%len_of_list_of_proxy]

    return `PROXY ${proxy_now}; ` + `PROXY ${list_of_proxy[0]};`
}
