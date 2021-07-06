import {useState} from "react";

const AddTodo = ({onAdd}) => {

    //faut que vos champs appartiennent au state useState()
    // onChange (attribut jsx) va falloir réaffecter un a valeur  au state de vos champs (3)
    //capter l'évenement submit sur votre formulaire (attribut jsx)
    // onSubmit => j'appel une méthode que vous aller définir dans votre fonction (handleSubmit)
    // faut annuler par défault le comportement du submit pour empecher le rechargement de la page
    // elle va envoyer à App.js un objet avec les valeurs insérées / cochées en passant par une props
    // dans app faudra mettre en place une méthode qui permet d'ajouter une élément à la liste et mettre à jour le state dans tasks
    // réinitialiser à du vide vos champs

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!text) {
            alert("Veuillez ajouter une task")
            return
        }
        onAdd({text, day, reminder})
        setText("")
        setDay("")
        setReminder(false)
    }
    return (
        <div>
            <form className='add-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label> Task </label>
                    <input type='text' placeholder='Ajouter une task' value={text} onChange={(e) => {
                        setText(e.target.value)
                    }}/>
                </div>
                <div className='form-control'>
                    <label> Date </label>
                    <input type='text' placeholder='Date' value={day} onChange={(e) => {
                        setDay(e.target.value)
                    }}/>
                </div>
                <div className='form-control form-control-check'>
                    <label> Ajouter un rappel </label>
                    <input type='checkbox' value={reminder} onChange={(e) => {
                        setReminder(e.currentTarget.checked)
                    }}/>
                </div>
                <input type='submit' className='btn btn-block' value='enregister'/>
            </form>
        </div>
    );
};
export default AddTodo;

