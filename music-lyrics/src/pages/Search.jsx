import axios from "axios";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [lyrics, setLyrics] = useState(null); 
  const [selectedSong, setSelectedSong] = useState(null);

  const submitSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://api.lyrics.ovh/suggest/${search}`);
      setResults(response.data.data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  const fetchLyrics = async (artist, title) => {
    try {
      const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      setLyrics(response.data.lyrics);
      setSelectedSong(title);
    } catch (error) {
      console.error("Error fetching lyrics:", error);
      setLyrics("Lyrics not available.");
    }
  };

  return (
    <div>
      <h1>Music Lyrics Search</h1>
      <form onSubmit={submitSearch}>
        <input 
          type="text" 
          id="search" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((song, index) => (
              <li key={index}>
                <strong>{song.title}</strong> by {song.artist.name}
                <button onClick={() => fetchLyrics(song.artist.name, song.title)}>Show Lyrics</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>

      {lyrics && (
        <div>
          <h2>Lyrics for {selectedSong}</h2>
          <pre>{lyrics}</pre>
        </div>
      )}
    </div>
  );
}
