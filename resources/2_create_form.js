<form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <input type="text" class="form-control" id="description" placeholder="Somewhere in Middle-earth..." />
  </div>
  <div class="form-group">
    <label for="description">Rating</label>
    <input type="number" max="5" min="0" class="form-control" id="rating" placeholder="3" />
    <small id="emailHelp" class="form-text text-muted">Max: 5, Min: 0 </small>
  </div>
  <div class="form-group">
    <label for="image">Image</label>
    <input type="text" class="form-control" id="image" placeholder="http://....." />
  </div>
  <div class="form-group">
    <label for="cover">Cover</label>
    <input type="text" class="form-control" id="cover" placeholder="http://......" />
  </div>
  <div class="form-group">
    <label for="longDesc">Long Description</label>
    <textarea class="form-control" id="longDesc" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="genre">Genre</label>
    <select multiple class="form-control" id="genre">
      <option>drama</option>
      <option>music</option>
      <option>adventure</option>
      <option>historical</option>
      <option>action</option>
    </select>
  </div>
</form>
