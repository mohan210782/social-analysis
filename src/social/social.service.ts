import { Injectable } from '@nestjs/common';
var Twit = require("promised-twit");
const t = new Twit({
    consumer_key:         'H6hBpxFHOJkRQQOWiehmUgeIz',
    consumer_secret:      'IM1WwkouhPJtUTp3MCjxVId4oj0csaEWhCQ0uCwil8OUjE9rUa',
    access_token:         '1271868879329882113-TsmyrNXhWGzqYsHxD2rpZG7kJIXeki',
    access_token_secret:  'TunyDt3R8SD8j2I6ZxTpCjBuxsmGDUS3iQkCxzUSeJWpp',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })

@Injectable()
export class SocialService {
   
    constructor(){
       
    }
    async doActions(): Promise<any> { 
        //console.log("test1");

        const tt = t.getSearchTweets({ q: 'dmk since:2020-07-14', count: 100 })
        .then(function(data) {
          console.log(data.statuses.length)
          return data;
        });
          return tt;

        //await this.setURL(drId);
        // return await axios.post(this.apiUrl, dropletActionDto, {
        //     headers: this.headersRequest,
        //   })
        //   .then(function (response) {
        //     console.log(response.data);
        //     return response.data
        //   })
        //   .catch(function (e) {
        //     console.log(e);
        //     throw new InternalServerErrorException( e );
        //   });


        //return {"test": "test333"}
    }
}
