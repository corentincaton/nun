function ParagraphWithBoldContainer({textA, textB, textC}) {
    return (  
        <div className="TextContainer">
            <p>{textA}<b>{textB}</b>{textC}</p>
        </div>
    );
}
 
export default ParagraphWithBoldContainer;