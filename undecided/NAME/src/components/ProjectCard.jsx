import "./ProjectCard.css"
function ProjectCard ({props}) {
    // props = props.props
    return (
      <>
        <div style={{position:'relative'}}>
            <div style ={{
                position: "absolute",
                backgroundImage: `url('${props.ImagePath}')`,
                backgroundSize: 'cover',
                height: "100%",
                width: "100%"
            }}/>
          <div className="projectCardMain">
            <h2>{props.Title}</h2>
            <h4>{props.Subtext}</h4>
          </div>
        </div>
      </>
    );

}
export default ProjectCard