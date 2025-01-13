document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button=document.querySelector('button');
button.style.width='50px';
button.style.height='30px';
button.style.marginLeft='10px';
button.addEventListener('click',()=>{

    const text=document.querySelector('textarea').value;
    const words=text.replaceAll('\n',' ').split(' ');
    const validWords=[];
    for(const word of words){
        if(word.includes('_')){
            const [first,second]=word.toLowerCase().split("_");
            validWords.push(first+second[0].toUpperCase()+second.slice(1));
        }
    }
    
    for(const [index,word] of validWords.entries()){
        validWords[index]=word.padEnd(20," ").concat('✅'.repeat(index+1)).concat('\n');
    }
    const ans=validWords.join('');
    console.log(validWords);
    const ansDiv=document.createElement('pre');
    ansDiv.innerText=ans;
    document.body.appendChild(ansDiv);
})
