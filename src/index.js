let string= "";
let node=document.querySelectorAll('button');


Array.from(node).forEach((button)=>{
    button.addEventListener('click',(e)=>{
      
        if(e.target.innerHTML =='=')
        {
            try{
                string=eval(string);
            }
            catch{
                string="Enter Appropriate Value"
            }
            document.querySelector('input').value=string
        }
        else
        {
            if(e.target.innerHTML!="AC")
            {

            if(e.target.innerHTML!="+/-")
            {   
            string=string+e.target.innerHTML;
            }

            document.querySelector('input').value=string;

            }
            else
            {
            document.querySelector('input').value=" ";
            string=" ";
            }

            if(e.target.innerHTML=="BS")
            {
            string=string.slice(0, - 3);
            document.querySelector('input').value=string;
            }

            if(e.target.innerHTML=="+/-")
            {
                try {
                    num=parseFloat(string);
                    if(num>0)
                    {
                    num=-num;
                    }
                else{
                    num=-num;
                    }
                } 
                catch{
                    string="Enter Appropriate Value";
                }    
                string=num.toString();
                document.querySelector('input').value=string;

            }

        }
        
        
    })
})
