import axios from "axios";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [lyrics, setLyrics] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitSearch = async (event) => {
    event.preventDefault();
    
    setLoading(true);
    try {
      const response = await axios.get(`https://api.lyrics.ovh/suggest/${search}`);
      setResults(response.data.data);
    } catch (error) {
      console.error("error fetching songs:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchLyrics = async (artist, title) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      setLyrics(response.data.lyrics);
      setSelectedSong(title);
    } catch (error) {
      console.error("Error fetching lyrics:", error);
      setLyrics("Lyrics not available.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Music Lyrics Search</h1>
      
      <form onSubmit={submitSearch} className="mb-8">
        <div className="flex gap-2">
          <input 
            type="text" 
            id="search" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Enter artist or song name"
            className="flex-1 p-2 border rounded"
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </form>

      {loading && <p className="text-center">Loading...</p>}

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Cover</th>
              <th className="px-4 py-2 text-left">Song</th>
              <th className="px-4 py-2 text-left">Artist</th>
              <th className="px-4 py-2 text-left">Album</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.length > 0 ? (
              results.map((song, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-2">
                    <div className="w-12 h-12">
                      {song.album && song.album.cover ? (
                        <img 
                          src={song.album.cover_medium || song.album.cover} 
                          alt={`${song.album.title} cover`}
                          className="w-full h-full object-cover rounded"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-xs">
                          No Cover
                        </div>
                      )}
                    </div>
                  </td>
                  
                  <td className="px-4 py-2 font-medium truncate max-w-xs">
                    {song.title}
                  </td>
                  
                  <td className="px-4 py-2 text-gray-700 truncate max-w-xs">
                    {song.artist.name}
                  </td>
                  
                  <td className="px-4 py-2 text-gray-600 truncate max-w-xs">
                    {song.album ? song.album.title : "Unknown"}
                  </td>
                  
                  <td className="px-4 py-2">
                    <button 
                      onClick={() => fetchLyrics(song.artist.name, song.title)}
                      className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm"
                    >
                      Lyrics
                    </button>
                    
                    {song.preview && (
                      <button 
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm ml-2"
                        onClick={() => window.open(song.preview, '_blank')}
                      >
                        Play
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : search ? (
              <tr>
                <td colSpan="5" className="px-4 py-8 text-center">No results found</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      {lyrics && (
        <div className="mt-8 p-4 border rounded">
          <h2 className="text-2xl font-bold mb-4">Lyrics for {selectedSong}</h2>
          <pre className="whitespace-pre-wrap font-sans">{lyrics}</pre>
        </div>
      )}
    </div>
  );
}