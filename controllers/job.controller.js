const http = require('http');
const url = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json';
const url_detail = 'http://dev3.dansmultipro.co.id/api/recruitment/positions';

const getJobPost = async function (req, res) {
    try {
        let param = new URLSearchParams(req.body).toString();
        let link = url.concat("?", param);

        http.get(link, function(result){
            let body = '';

            result.on('data', function(chunk){
                body += chunk;
            });

            result.on('end', function(){
                return res.status(200).json({
                    success: true,
                    data: {
                        url: url,
                        param: param
                    },
                    content: JSON.parse(body)
                })
            });
        }).on('error', function(e){
            throw e
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e
        })
    }
}

const getOne = async function (req, res) {
    try {
        let link = url_detail.concat("/", req.params.id);

        http.get(link, function(result){
            let body = '';

            result.on('data', function(chunk){
                body += chunk;
            });

            result.on('end', function(){
                return res.status(200).json({
                    success: true,
                    data: {
                        url: url,
                        link: link,
                    },
                    content: JSON.parse(body)
                })
            });
        }).on('error', function(e){
            throw e
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e
        })
    }
}


module.exports = { getJobPost, getOne }