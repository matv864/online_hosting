function FindProxyForURL(url, host)
{
    list_of_proxy = [
        "http://111111:11111111@45.89.18.248:11068"
    ]
    len_of_list_of_proxy = list_of_proxy.length
    t = new Date().getSeconds()
    proxy_now = list_of_proxy[t%len_of_list_of_proxy]

    return `PROXY ${proxy_now}; ` + `PROXY ${list_of_proxy[0]};`
}
