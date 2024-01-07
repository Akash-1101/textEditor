import "./index.css"

const TextItem=(props)=>{
    const {data}=props
    const {text,fontFamily,fontColor,fontSize}=data
    return(
        <div className='text-item-container'
            style={{
              fontFamily,
              fontSize,
              color: fontColor,
              border: '1px solid black',
              padding: '10px',
              margin: '20px',
            }}
          >
            {text}
          </div>
    )
}

export default TextItem