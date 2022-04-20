
import './form.css'
function FormName(){
    const element={

        borderRadius:'30%',
        backgroundColor:'purple',
        width: '10%',
        textAlign: 'center',
        marginLeft: '45%',
    }
    return(
        
        <form className='forme'>
     <h1 className='Title'>My form</h1>

     <input className='input1' placeholder='Your first-name' ></input>
     <input style={element} placeholder='Your second-name' ></input>
    </form>
    );
}
export default FormName