

export function ItchLink() {
    const games = [
        {
            title: 'Ancestral Journey',
            url: 'https://dannte9804.itch.io/jam-evolution',
            embedUrl: 'https://itch.io/embed/2627926',
            description: 'Ancestral Journey by dannte9804, Daniel Alexander Arenas Gaviria, JonFraSan-Game-Developer, dego_leiv'
        },
        {
            title: 'Evolunation',
            url: 'https://anigir.itch.io/evolunation',
            embedUrl: 'https://itch.io/embed/2600570',
            description: 'Evolunation by Ani, LeoQuiroga, santiagozsh, dego_leiv'
        },
        {
            title: 'Sky Rupt',
            url: 'https://lizgricas.itch.io/skyrupt',
            embedUrl: 'https://itch.io/embed/2653609',
            description: 'SKYRUPT by LIZGRICAS, darodsu, dego_leiv, santiagozsh, Santiago Diaz'
        }
    ];

    return (
        <div className="itch-games">
            {games.map((game, index) => (
                <div key={index} className="game">
                    <h3>{game.title}</h3>
                    <iframe 
                        src={game.embedUrl}
                        width="552" 
                        height="167"
                        allowFullScreen
                        title={game.title}
                    />
                    <p>{game.description}</p>
                   
                </div>
            ))}
        </div>
    );
}
