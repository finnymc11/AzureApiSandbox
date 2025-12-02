module.exports = async function (context, req) {
  const name = req.query.name || (req.body && req.body.name);

  const responseMessage = name
    ? `Hello, ${name}. This HTTP triggered function executed successfully. Hi, ${name}!`
    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

  context.log("HTTP trigger processed a request.");

  context.res = {
    status: 200,
    body: responseMessage
  };
};
