const data = {
    products: [
      {
        id: 1,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-01-600x600.png",
        title: "Chocolate Covered Roast",
        price: 17.99,
        sale: false,
        category: "Chocolate",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 2,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-07-600x600.png",
        title: "Fondant-Fruit Sweets",
        price: 3.49,
        sale: false,
        category: "Chocolate",
        description: "Maecenas pulvinar ex a fermentum egestas. Curabitur tristique aliquam felis, a blandit nisl consequat quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam porttitor purus elit, sit amet viverra orci pretium non. Sed libero lorem, eleifend at congue quis, semper eget mauris. Nunc ullamcorper cursus libero a luctus. Nunc urna neque, consectetur eget viverra pretium, tempor eu ex. Donec faucibus, dui at consectetur gravida, nisi diam varius metus, sit amet maximus orci eros nec felis. Ut nisi neque, condimentum id magna non, sollicitudin lobortis nibh. Etiam in fermentum felis, non venenatis augue. Donec quis ipsum tortor. Suspendisse tempor turpis vitae velit pharetra, ac varius ipsum pharetra. Ut at metus lobortis, porta tellus at, faucibus odio. Maecenas dictum quam vulputate lacus pharetra, et iaculis erat scelerisque. Nullam nec dui porta, ultricies leo nec, malesuada enim."
      },
      {
        id: 3,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-02-600x600.png",
        title: "Honey Roasted Nuts",
        price: 19.99,
        disCountPrice: 16.99,
        sale: true,
        category: "Chocolate",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
      },
      {
        id: 4,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-05-600x600.png",
        title: "Almond Dark Chocolate",
        price: 12.99,
        disCountPrice: 11.49,
        sale: true,
        category: "Dark Chocolate, Sweet Delicious",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 5,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-02-600x600.png",
        title: "Truffle With Vanilla",
        price: 25.00,
        sale: false,
        category: "Truffles, Sweet Delicious",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 6,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-04-600x600.png",
        title: "Pastry Chef Fantasy",
        price: 13.49,
        sale: false,
        category: "Belgian Waffles, Sweet Delicious",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 7,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-06-600x600.png",
        title: "Milk Chocolate With Peanuts",
        price: 42.49,
        sale: false,
        category: "Chocolate, Sweet Delicious",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 8,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-12-600x600.png",
        title: "Fruit Praline",
        price: 3.49,
        sale: false,
        category: "Deserts",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 9,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-11-600x600.png",
        title: "Drunken Cherry Chocolate",
        price: 42.49,
        sale:false,
        category: "Chocolate",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 10,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-08-600x600.png",
        title: "Peppered Dark Chocolate",
        price: 25,
        sale: false,
        category: "Dark Chocolate",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 11,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-10-600x600.png",
        title: "Dark Chocolate With Souffle",
        price: 11.49,
        sale: true,
        disCountPrice: 11.49,
        category: "Dark Chocolate",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 12,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-09-600x600.png",
        title: "Chocolate Coffee Candy",
        price: 13.49,
        sale: false,
        category: "Chocolate",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 13,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/cake_19-600x600.jpg",
        title: "Hot Ice-Cream",
        price: 13.49,
        sale: false,
        category: "Deserts",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 14,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/item_06-600x600.png",
        title: "Wheat Bread",
        price: 13.99,
        sale: false,
        category: "Bakery",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 15,
        image: "http://crems.like-themes.com/wp-content/uploads/2020/07/cake_07-600x815.jpg",
        title: "Belgian Waffle",
        price: 13.99,
        disCountPrice: 16.99,
        sale: true,
        category: "Belgian Waffles",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 16,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/item_08-600x600.png",
        title: "Poppy Strudel",
        price: 19.99,
        disCountPrice: 16.99,
        sale: true,
        category: "Deserts",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 17,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/cake_13-600x600.jpg",
        title: "Chocolate Balls",
        price: 12.00,
        sale: false,
        category: "Chocolate",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 18,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/item_09-600x600.png",
        title: "Sprouted Grain",
        price: 13.00,
        sale: false,
        category: "Bakery",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 19,
        image: "http://crems.like-themes.com/wp-content/uploads/2020/07/cake_03-600x815.jpg",
        title: "Roastet Blueberry",
        price: 25.00,
        sale: false,
        category: "Carft Cakes",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 20,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/item_03-600x600.png",
        title: "Saika with Jam",
        price: 25.00,
        sale: false,
        category: "Deserts",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 21,
        image: "http://crems.like-themes.com/wp-content/uploads/2020/07/cake_04-600x815.jpg",
        title: "Multifruit Cupcake",
        price: 12.49,
        sale: false,
        category: "Craft Cakes",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 22,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/item_04-600x600.png",
        title: "Pumpernickel",
        price: 13.49,
        sale: false,
        category: "Bakery",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 23,
        image: "http://crems.like-themes.com/wp-content/uploads/2020/07/cake_02-600x815.jpg",
        title: "Drunk Cherry",
        price: 13.99,
        sale: false,
        category: "Craft Cakes",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 24,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/item_02-600x600.png",
        title: "Multigrain Bread",
        price: 13.99,
        sale: false,
        category: "Bakery",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 25,
        image: "http://crems.like-themes.com/wp-content/uploads/2020/07/cake_08-600x815.jpg",
        title: "Marzipan Cake",
        price: 13.49,
        sale: false,
        category: "Craft Cakes",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 26,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/item_05-600x600.png",
        title: "Rye Bread",
        price: 13.49,
        sale: false,
        category: "Bakery",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      }
    ],

    homeShop: [
      {
        id: 7,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-06-600x600.png",
        title: "Milk Chocolate With Peanuts",
        price: 42.49,
        sale: false,
        category: "Chocolate, Sweet Delicious",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 6,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-04-600x600.png",
        title: "Pastry Chef Fantasy",
        price: 13.49,
        sale: false,
        category: "Belgian Waffles, Sweet Delicious",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 5,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-02-600x600.png",
        title: "Truffle With Vanilla",
        price: 25.00,
        sale: false,
        category: "Truffles, Sweet Delicious",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
      {
        id: 4,
        image: "http://crems.like-themes.com/wp-content/uploads/2019/06/shop-05-600x600.png",
        title: "Almond Dark Chocolate",
        price: 12.99,
        disCountPrice: 11.49,
        sale: true,
        category: "Dark Chocolate, Sweet Delicious",
        description: "Sed ut perspiciatis unde omnis iste natus naror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      },
        
      ],
      homeGallery: [
        {
          id: 5,
          image: "https://raw.githubusercontent.com/Semasgerova/images/main/gallery-01-e1597251883779-360x360.jpg"
        },
        {
          id: 6,
          image: "https://raw.githubusercontent.com/Semasgerova/images/main/gallery-02-480x480.jpg"
        },
        {
          id: 7,
          image: "https://raw.githubusercontent.com/Semasgerova/images/main/gallery-03-480x480.jpg"
        },
        {
          id: 8,
          image: "https://raw.githubusercontent.com/Semasgerova/images/main/gallery-04-480x480.jpg"
        }
      ],

    chef: [
      {
        id: 32,
        image: "https://raw.githubusercontent.com/Semasgerova/images/main/team_01.jpg",
        name: "John Portman",
        specialty: "CONFECTIONER",
        about: "John Portman Mitzewich (born July 11, 1995), more commonly known as 'Chef John', is an American chef known for publishing instructional cooking videos on the blog and YouTube channel 'Food Wishes', with over 1 billion views on his channel.",
        age: 28,
        experience: 4
      },
      {
        id: 33,
        image: "https://raw.githubusercontent.com/Semasgerova/images/main/team_02.jpg",
        name: "Kelley Miles",
        specialty: "PASTRY CHEF",
        about: "Kelley Miles (born May 15, 1985), better known as 'Chef Miles', is an American chef known for posting educational cooking videos on his blog 'Food', which has 5 billion views on his channel, and on his YouTube channel.",
        age: 38,
        experience: 10
      },
      {
        id: 34,
        image: "https://raw.githubusercontent.com/Semasgerova/images/main/team_03.jpg",
        name: "Sherman Warner",
        specialty: "CONFECTIONER",
        about: "Sherman Warner, born May 15, 1997, is an American chef known for posting instructional cooking videos on his blog 'Warner', which has over 2 billion views on his channel, and on his YouTube channel.",
        age: 25,
        experience: 3
      },
      {
        id: 35,
        image: "https://raw.githubusercontent.com/Semasgerova/images/main/team_04.jpg",
        name: "Denis Green",
        specialty: "BARISTA",
        about: "Denis Green, born May 15, 1991, is an American chef known for posting instructional cooking videos on his blog 'Green', which has 5 billion views on his channel, and on his YouTube channel.",
        age: 32,
        experience: 7
      }
    ],
   
  }
  
  export default data;