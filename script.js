const keys=document.querySelectorAll(".piano-keys .key")
keys.forEach((key)=>{

    key.addEventListener("click",function(e){

        var KeyNote=this.dataset.key
        PlayNotes(KeyNote)
    })

})
function PlayNotes(key)
{
    
    var NoteSound=new Audio('tunes/'+key+'.wav')
    NoteSound.play()
}
window.addEventListener("keypress",(e)=>{
    PlayNotes(e.key)

})