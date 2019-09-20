

import { useState } from 'react'



const MovieCreateForm = () => {

  const [form, setForm] = useState({
    name: 'Some Movie',
    description: 'Some Description'
  })

  const handleChange = (event) => {
    const target = event.target
    const name = target.name

    setForm({
      ...form,
      [name]: target.value
    })
  }

  return (
    <form>
      { JSON.stringify(form)}
      <div className="form-group">
        <label for="name">Name</label>
        <input
          onChange={handleChange}
          value={form.name}
          name="name"
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings" />
      </div>
      <div className="form-group">
        <label for="description">Description</label>
        <input
          onChange={handleChange}
          value={form.description}
          name="description"
          type="text"
          className="form-control"
          id="description"
          placeholder="Somewhere in Middle-earth..." />
      </div>
      <div className="form-group">
        <label for="description">Rating</label>
        <input
          onChange={handleChange}
          value={form.rating}
          name="rating"
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          placeholder="3" />
        <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
      </div>
      <div className="form-group">
        <label for="image">Image</label>
        <input
          onChange={handleChange}
          value={form.image}
          name="image"
          type="text"
          className="form-control"
          id="image"
          placeholder="http://....." />
      </div>
      <div className="form-group">
        <label for="cover">Cover</label>
        <input
          onChange={handleChange}
          value={form.cover}
          name="cover"
          type="text"
          className="form-control"
          id="cover"
          placeholder="http://......" />
      </div>
      <div className="form-group">
        <label for="longDesc">Long Description</label>
        <textarea
          onChange={handleChange}
          value={form.longDesc}
          name="longDesc"
          className="form-control"
          id="longDesc"
          rows="3"></textarea>
      </div>
      <div className="form-group">
        <label for="genre">Genre</label>
        <select
          multiple
          className="form-control"
          id="genre">
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
    </form>
  )
}

export default MovieCreateForm
