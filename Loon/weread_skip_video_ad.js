const url = $request.url;
const method = $request.method;
if (!$response.body) {
    console.log(`$response.body为undefined:${url}`);
    $done({});
}

let body = JSON.parse($response.body);

if (body) {
    let map = new Map(Object.entries(body['data']));
    map.forEach((value, key) => {
        let list = value["list"];
        list.forEach(arr => {
            if (arr["video"]) {
                arr["video"] = "";
            }
            if (arr["img"]) {
                arr["img"] = "";
            }
        })
    })
}

body = JSON.stringify(body);

$done({
    body
});
