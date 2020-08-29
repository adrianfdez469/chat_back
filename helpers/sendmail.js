var SibApiV3Sdk = require('sib-api-v3-sdk');
const config = require('config');

const emailTemplates = {
    'SIGNUP-EN': 1,
    'SIGNUP-ES': 2,
    'RESETPASS-EN': 4,
    'RESETPASS-ES': 5,
    'SHAREAPP-EN': 6,
    'SHAREAPP-ES': 7
}

const send = (email, paramsObj, templateId) => {
    
    var defaultClient = SibApiV3Sdk.ApiClient.instance;

    // Configure API key authorization: api-key
    var apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = config.get('mail_api_token');

    // Uncomment below two lines to configure authorization using: partner-key
    // var partnerKey = defaultClient.authentications['partner-key'];
    // partnerKey.apiKey = 'YOUR API KEY';

    var apiInstance = new SibApiV3Sdk.SMTPApi();

    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

    sendSmtpEmail = {
        to: [{
            email: email,
            //FIRSTNAME: firstname
        }],
        templateId: templateId,// 1 para ingles, 2 para español
        params: paramsObj,
        
        /*params: {
            "name": firstname,
            "link": link // PONER EL LINK SIN EL HTTPS
        },*/
        headers: {
            'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
        }
    };
    console.log(sendSmtpEmail);
    //if(!config.has("dev")){
        apiInstance.sendTransacEmail(sendSmtpEmail)
            .then(data => {
                    console.log('CORREO ENVIADO SATISFACTORIAMENTE');
            }, error => {
                
                console.error('ERROR ENVIANDO CORREO');
                console.error(error);
        });
    //}
    
}

module.exports = {send, emailTemplates};






