export function handleRes(
    apiCb,
    data,
    defCb,
    sucCb,
    faiCb
) {
    apiCb(data)
        .unwrap()
        .then(result => {
            if (sucCb) sucCb(result);
            if (defCb) defCb(result);
            console.log(result);
        })
        .catch(result => {
            if (faiCb) faiCb(result);
            if (defCb) defCb(result);
            console.log(result);
        });
}
