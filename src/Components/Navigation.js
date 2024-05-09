

export default function Navigation({ currentFeed, onTrendingClick, onNewestClick }) {
    return (
        <div className="navButton">
            <button
                onClick={onTrendingClick} 
                className={ currentFeed === 'trendings' ? 'active' : undefined }
            >Posts les plus likés</button>
            <button 
                onClick={onNewestClick}
                className={ currentFeed === 'newest' ? 'active' : undefined }
            >Posts les plus récents</button>
        </div>
    )
}


