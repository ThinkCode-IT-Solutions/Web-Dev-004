let MoodViewer = ({mood}) => {
    console.log(mood); 
    return (
        <>
            <div className="card">
                <button >
                    Mood is {mood}
                </button>
            
            </div>
        </>
    );
}
export default MoodViewer;