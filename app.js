const counters = [
  {
    index: 1,
    name: 'Dawson',
    bean: 'Lima Beans',
    count: 759
  },
  {
    index: 2,
    name: 'Antoinette',
    bean: 'Butter Beans',
    count: 286
  },
  {
    index: 3,
    name: 'Garza',
    bean: 'Butter Beans',
    count: 177
  },
  {
    index: 4,
    name: 'Jodie',
    bean: 'Pinto Beans',
    count: 518
  },
  {
    index: 5,
    name: 'Grant',
    bean: 'Green Beans',
    count: 424
  },
  {
    index: 6,
    name: 'Morin',
    bean: 'Jelly Beans',
    count: 436
  },
  {
    index: 7,
    name: 'Nichole',
    bean: 'Kidney Beans',
    count: 705
  },
  {
    index: 8,
    name: 'Bertha',
    bean: 'Black Beans',
    count: 524
  },
  {
    index: 9,
    name: 'Carroll',
    bean: 'Pinto Beans',
    count: 262
  },
  {
    index: 10,
    name: 'Constance',
    bean: 'Pinto Beans',
    count: 127
  },
  {
    index: 11,
    name: 'Mccall',
    bean: 'Lima Beans',
    count: 272
  },
  {
    index: 12,
    name: 'Marsha',
    bean: 'Kidney Beans',
    count: 300
  },
  {
    index: 13,
    name: 'Brandi',
    bean: 'Green Beans',
    count: 275
  },
  {
    index: 14,
    name: 'Roman',
    bean: 'Butter Beans',
    count: 568
  },
  {
    index: 15,
    name: 'Kristy',
    bean: 'Lima Beans',
    count: 747
  },
  {
    index: 16,
    name: 'Gilliam',
    bean: 'Green Beans',
    count: 618
  },
  {
    index: 17,
    name: 'Ware',
    bean: 'Kidney Beans',
    count: 945
  },
  {
    index: 18,
    name: 'Durham',
    bean: 'Green Beans',
    count: 383
  },
  {
    index: 19,
    name: 'Darcy',
    bean: 'Jelly Beans',
    count: 722
  },
  {
    index: 20,
    name: 'Bush',
    bean: 'Lima Beans',
    count: 814
  },
  {
    index: 21,
    name: 'Gibbs',
    bean: 'Pinto Beans',
    count: 413
  },
  {
    index: 22,
    name: 'Francisca',
    bean: 'Butter Beans',
    count: 791
  },
  {
    index: 23,
    name: 'Hill',
    bean: 'Black Beans',
    count: 593
  },
  {
    index: 24,
    name: 'Rosario',
    bean: 'Jelly Beans',
    count: 860
  },
  {
    index: 25,
    name: 'Elinor',
    bean: 'Lima Beans',
    count: 379
  },
  {
    index: 26,
    name: 'Lela',
    bean: 'Butter Beans',
    count: 358
  },
  {
    index: 27,
    name: 'Harrington',
    bean: 'Kidney Beans',
    count: 199
  },
  {
    index: 28,
    name: 'Concetta',
    bean: 'Green Beans',
    count: 830
  },
  {
    index: 29,
    name: 'Dana',
    bean: 'Black Beans',
    count: 974
  },
  {
    index: 30,
    name: 'Lydia',
    bean: 'Black Beans',
    count: 871
  },
  {
    index: 31,
    name: 'Ilene',
    bean: 'Green Beans',
    count: 410
  },
  {
    index: 32,
    name: 'Scott',
    bean: 'Butter Beans',
    count: 582
  },
  {
    index: 33,
    name: 'Melba',
    bean: 'Butter Beans',
    count: 410
  },
  {
    index: 34,
    name: 'Campbell',
    bean: 'Black Beans',
    count: 773
  },
  {
    index: 35,
    name: 'Frye',
    bean: 'Green Beans',
    count: 964
  },
  {
    index: 36,
    name: 'Althea',
    bean: 'Green Beans',
    count: 402
  },
  {
    index: 37,
    name: 'Kara',
    bean: 'Jelly Beans',
    count: 537
  },
  {
    index: 38,
    name: 'Tracie',
    bean: 'Black Beans',
    count: 951
  },
  {
    index: 39,
    name: 'Warren',
    bean: 'Lima Beans',
    count: 565
  },
  {
    index: 40,
    name: 'Alvarez',
    bean: 'Green Beans',
    count: 307
  },
  {
    index: 41,
    name: 'Shelley',
    bean: 'Jelly Beans',
    count: 629
  },
  {
    index: 42,
    name: 'Vinson',
    bean: 'Butter Beans',
    count: 263
  },
  {
    index: 43,
    name: 'Bernard',
    bean: 'Jelly Beans',
    count: 713
  },
  {
    index: 44,
    name: 'House',
    bean: 'Black Beans',
    count: 438
  },
  {
    index: 45,
    name: 'Grimes',
    bean: 'Pinto Beans',
    count: 352
  },
  {
    index: 46,
    name: 'Carrie',
    bean: 'Black Beans',
    count: 893
  },
  {
    index: 47,
    name: 'Kirk',
    bean: 'Butter Beans',
    count: 290
  },
  {
    index: 48,
    name: 'Caldwell',
    bean: 'Lima Beans',
    count: 415
  },
  {
    index: 49,
    name: 'Franklin',
    bean: 'Jelly Beans',
    count: 498
  },
  {
    index: 50,
    name: 'Erna',
    bean: 'Kidney Beans',
    count: 759
  }
]

const $total = document.getElementById('total')
const $tbody = document.getElementById('tbody')
const $thead = document.getElementById('thead')
const $form = document.getElementById('form')
const $search = document.getElementById('search')

function buildTable (counters) {
  if (typeof rows === 'function') {
    if (typeof search === 'function') {
      counters = search(counters, $search.value)
    } else {
      console.error('The search() function is not defined. The search() function should return a filtered array which has been filtered based on the passed query. The filter() method should be used  on the passed array.')
    }

    const html = rows(counters)

    if (typeof html === 'string') {
      $tbody.innerHTML = html
      if (typeof total === 'function') {
        const counted = total(counters)
        if (typeof counted === 'number') {
          $total.innerHTML = counted
        } else {
          console.error(`The total() function is not returning the correct value. The total() function should return a number containing total beans counted for every counter in the pass array. The reduce() method should be used. Instead, "${counted}" was returned.`)
        }
      } else {
        console.error('The total() function is not defined. The total() function should return a number containing total balance value every client in the pass array. The reduce() method should be used.')
      }
    } else {
      console.error(`The rows() function is not returning the correct value. The rows() functions should return an HTML string created from the passed array. The map() function should be used on passed array. Instead, an "${typeof html}" was returned.`)
    }
  } else {
    console.error('The rows() function is not defined. The rows() function should return an HTML string created from the passed array. The map() function should be used on passed array.')
  }
}

$thead.addEventListener('click', function (e) {
  if (e.target.tagName === 'TH') {
    if (typeof order === 'function') {
      buildTable(order(counters, e.target.id))
    } else {
      console.error('The order() function is not defined. The order() function should return a sorted array which has been sorted based on the passed property. The sort() method should be used on the passed array.')
    }
  }
})

$form.addEventListener('submit', function (e) {
  e.preventDefault()
})

$search.addEventListener('input', function (e) {
  buildTable(counters)
})

buildTable(counters)
