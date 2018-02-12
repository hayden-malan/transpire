import React from 'react'

//subcomponents



import QuoteOTM from './QuoteOTM'
import BlankSpace from './BlankSpace'


const Positivity = () => {
    return (
        <div id='questionform'>
            <form id='questionform'>
                <div className="row">
                    <div className="six columns">
                        <label for="exampleEmailInput">Your email</label>
                        <input id='questionform' className="u-full-width" type="email" placeholder="bees@hive.swarm" />
   </div>
                        <div className="six columns">
                            <label for="exampleRecipientInput">Reason for contacting</label>
                            <select className="u-full-width" id='questionform'>
                                <option value="Option 1">Questions</option>
                                <option value="Option 2">Admiration</option>
                                <option value="Option 3">Can I get your number?</option>
                            </select>
                        </div>
                    </div>
                    <label for="exampleMessage">Message</label>
                    <textarea className="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
                    <label className="example-send-yourself-copy">
                        <input type="checkbox" />
                            <span className="label-body">Send a copy to yourself</span>
 </label>
                        <input className="button-primary" type="submit" value="Submit" />
</form>
      
    </div>
    

    
                    )
}

export default Positivity







