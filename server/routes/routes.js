import { Links } from '../../imports/collections/links';
//WebApp gives us access to the routing meteor uses
import { WebApp } from 'meteor/webapp';
//Connect Route lets us use an instance of router that is like express's
import ConnectRoute from 'connect-route';

function onRoute(req, res, next) {
  const link = Links.findOne({token: req.params.token});

  if (link) {
    //status code 307 is a redirect
    //We use writeHead to send user to Location
    //We res.end() to end the request
    Links.update(link, {$inc: {clicks: 1}});
    res.writeHead(307, { 'Location': link.url });
    res.end();
  } else {
    //next sends our request to the next middleware, eventually the * route
    next();
  }
}
//defining our routes
const middleware = ConnectRoute(function(router) {
  router.get('/:token', onRoute)
});

WebApp.connectHandlers.use(middleware);
