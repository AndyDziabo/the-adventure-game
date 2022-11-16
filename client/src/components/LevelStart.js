
function LevelStart({ map, direction, walking }) {
    return (
        <>
            <div className="main">
                <div className="camera">
                    <div className={`map ${map} pixel-art`}>
                        <div className="player">
                            <div className={`player-spritesheet pixel-art ${direction} ${walking ? "walking" : null}`}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LevelStart;