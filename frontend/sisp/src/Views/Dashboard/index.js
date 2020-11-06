import React from 'react'


import Iframe from 'react-iframe'


function Dashboard(){
    return(
        <div>
            
            <Iframe width="1140" height="541.25" 
            src="https://app.powerbi.com/reportEmbed?reportId=39b42420-f3ac-498a-80e3-df14341f139f&autoAuth=true&ctid=4a71c171-c18c-4f00-9b2a-1fa927759f37&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" 
            frameborder="0" allowFullScreen="true" ></Iframe>

        </div>

    )
}

export default Dashboard;