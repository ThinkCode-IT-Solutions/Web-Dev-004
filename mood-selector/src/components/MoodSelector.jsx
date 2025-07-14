let MoodSelector = ({setMood}) => {
    let moodList = [
        {
            emoji : "😀",
            label : "Happy",
        },
        {
            emoji : "😔",
            label : "Sad"
        },
        {
            emoji : "🤩",
            label : "Excited",
        },
        {
            emoji : "😡",
            label : "Angry"
        },
        {
            emoji : "😴",
            label : "Tired",
        },
        {
            emoji : "🤯",
            label : "Shocked"
        },
    ];

    let onMoodChange = (item)=>{
        console.log("mood changed");
        console.log(item);
        setMood(item.emoji);
    }
    // jsx document
    return(
        <>
        <h2>Select Your Mood</h2>
        <div>
            {
                moodList.map(
                    (moodItem, index) => {
                        return  <button key={index} className="mx-2" onClick={ () => onMoodChange(moodItem) }>{moodItem.emoji} {moodItem.label}</button>;
                    }
                )
            }
           
        </div>
        </>
    );
}


export default MoodSelector;