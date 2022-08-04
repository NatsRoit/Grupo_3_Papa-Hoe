{/* <article class="product">
                        <% let arr = Array.from({length: 4}, () => Math.floor(Math.random() * productos.length));
                            console.log(arr);%>
                        <% for (let i = 0; i < arr.length; i++) { %>
                            <a href="/product/detail/ + <%= productos[arr[i]].id%>">
                                <img src="/img/<%= productos[arr[i]].imagen %>"
                                alt="<%= productos[arr[i]].nombre%>" width="100%">
                                <div class="product-info">
                                    <h5><%= productos[arr[i]].titulo %></h5>
                                </div>
                            </a>
                        <% } %>
                    </article>

                     */}



for (var arr=[],
    i=0; i<40; ++i)

    arr[{length: 4}, i]=i;

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return [array ] ;
}

console.log(shuffle(arr));