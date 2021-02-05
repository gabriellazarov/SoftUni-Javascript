function solve(object) {

    let regexURI = /^[\w.]+$/m;

    let regexMessage = /^[^\<\>\&\\\'\"]*$/m;

    if ((object.method != 'GET' && object.method != 'POST' && object.method != 'DELETE' && object.method != 'CONNECT') || object.method == undefined) {
        throw new Error('Invalid request header: Invalid Method');
    } else if ((object.uri != '*' && regexURI.test(object.uri) == false) || object.uri == undefined) {
        throw new Error('Invalid request header: Invalid URI');
    } else if ((object.version != 'HTTP/0.9' && object.version != 'HTTP/1.0' && object.version != 'HTTP/1.1' && object.version != 'HTTP/2.0') || object.version == undefined) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (regexMessage.test(object.message) == false || object.message == undefined) {
        throw new Error('Invalid request header: Invalid Message');
    } else return object;
}


solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
})

