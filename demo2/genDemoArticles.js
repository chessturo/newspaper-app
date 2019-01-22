const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'newspaper-test';

const client = new MongoClient(url);

async function a() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    let r = await db.collection('articles').insertMany([{
      title: `The Government Did a Thing.`,
      byline: `It was actually pretty cool.`,
      url: `#`,
      thumbnail: `test1.jpg`,
      content: `Earlier today, the US congress did a cool thing. Details:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id nulla at felis rhoncus efficitur et sed ligula. Nunc vel auctor eros, eget facilisis erat. Nulla eu augue vel lorem aliquet semper. Nunc ultrices turpis sollicitudin sapien sodales, id sagittis tellus efficitur. Mauris pharetra sem elit, in cursus odio iaculis sed. Maecenas ullamcorper dictum mi eu eleifend. Nulla ultricies ante at ipsum porttitor interdum. Mauris faucibus finibus nulla sit amet pharetra. Pellentesque mollis vestibulum odio ac tristique. Morbi nulla sapien, varius vel eleifend nec, fringilla a dui.

        Praesent suscipit quam et ante mattis, non venenatis orci commodo. Aenean vehicula egestas nisi et elementum. Praesent volutpat lectus vel tortor ultricies porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras accumsan ornare odio. Etiam sed mollis nibh. Maecenas ut felis pellentesque, vehicula turpis luctus, malesuada diam.

        In eget molestie sem. Suspendisse mauris mi, vehicula nec risus at, sollicitudin sodales ipsum. Nunc sed odio nec sapien sodales gravida. Aenean facilisis erat quis sapien gravida cursus. Sed imperdiet pellentesque tincidunt. Praesent semper, nibh in placerat pharetra, ligula dui sagittis ligula, quis mattis velit metus eu nisl. Nulla aliquam aliquet tortor, ac consectetur arcu interdum vitae.

        Maecenas quis eleifend nunc, vel egestas neque. Duis vitae nibh sapien. Cras ut orci pellentesque, vulputate lorem sit amet, posuere augue. Praesent id placerat diam, ac rutrum eros. Etiam ac finibus odio, ullamcorper consectetur velit. Aliquam scelerisque scelerisque quam, ut varius est rhoncus non. Aenean vulputate eros ante. Nulla vel volutpat metus, ac gravida eros. Phasellus sagittis, leo eu dignissim pharetra, felis massa aliquet velit, at efficitur enim velit nec leo. Fusce malesuada   vehicula libero, eu condimentum metus suscipit nec. Aenean molestie tellus eu elit iaculis commodo. Pellentesque ut ex eget enim volutpat varius non eget urna. Sed placerat felis nibh, venenatis sollicitudin erat vulputate ut.

        Integer venenatis tempor dolor et consectetur. Nam tristique sodales arcu id faucibus. Sed ac lacus quis tortor vehicula feugiat quis at quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ultrices ipsum tellus, eget tincidunt odio facilisis scelerisque. Ut quis ante ac risus volutpat laoreet nec eu tellus. Nunc at fringilla dui. Nulla facilisi. Pellentesque vel sodales tellus, hendrerit commodo dolor. Proin pretium vulputate maximus. `.replace('        ', ''),
      tags: ['current'],
      time: new Date('January 17, 2018 15:00:00').toISOString()
    },
    {
      title: `The Government Did a TOTALLY DIFFERENT Thing.`,
      byline: `And it was even COOLER.`,
      url: `#`,
      thumbnail: `test2.jpg`,
      content: `Earlier today, the US congress did a different, but still cool thing. Details:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id nulla at felis rhoncus efficitur et sed ligula. Nunc vel auctor eros, eget facilisis erat. Nulla eu augue vel lorem aliquet semper. Nunc ultrices turpis sollicitudin sapien sodales, id sagittis tellus efficitur. Mauris pharetra sem elit, in cursus odio iaculis sed. Maecenas ullamcorper dictum mi eu eleifend. Nulla ultricies ante at ipsum porttitor interdum. Mauris faucibus finibus nulla sit amet pharetra. Pellentesque mollis vestibulum odio ac tristique. Morbi nulla sapien, varius vel eleifend nec, fringilla a dui.

        Praesent suscipit quam et ante mattis, non venenatis orci commodo. Aenean vehicula egestas nisi et elementum. Praesent volutpat lectus vel tortor ultricies porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras accumsan ornare odio. Etiam sed mollis nibh. Maecenas ut felis pellentesque, vehicula turpis luctus, malesuada diam.

        In eget molestie sem. Suspendisse mauris mi, vehicula nec risus at, sollicitudin sodales ipsum. Nunc sed odio nec sapien sodales gravida. Aenean facilisis erat quis sapien gravida cursus. Sed imperdiet pellentesque tincidunt. Praesent semper, nibh in placerat pharetra, ligula dui sagittis ligula, quis mattis velit metus eu nisl. Nulla aliquam aliquet tortor, ac consectetur arcu interdum vitae.

        Maecenas quis eleifend nunc, vel egestas neque. Duis vitae nibh sapien. Cras ut orci pellentesque, vulputate lorem sit amet, posuere augue. Praesent id placerat diam, ac rutrum eros. Etiam ac finibus odio, ullamcorper consectetur velit. Aliquam scelerisque scelerisque quam, ut varius est rhoncus non. Aenean vulputate eros ante. Nulla vel volutpat metus, ac gravida eros. Phasellus sagittis, leo eu dignissim pharetra, felis massa aliquet velit, at efficitur enim velit nec leo. Fusce malesuada   vehicula libero, eu condimentum metus suscipit nec. Aenean molestie tellus eu elit iaculis commodo. Pellentesque ut ex eget enim volutpat varius non eget urna. Sed placerat felis nibh, venenatis sollicitudin erat vulputate ut.

        Integer venenatis tempor dolor et consectetur. Nam tristique sodales arcu id faucibus. Sed ac lacus quis tortor vehicula feugiat quis at quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ultrices ipsum tellus, eget tincidunt odio facilisis scelerisque. Ut quis ante ac risus volutpat laoreet nec eu tellus. Nunc at fringilla dui. Nulla facilisi. Pellentesque vel sodales tellus, hendrerit commodo dolor. Proin pretium vulputate maximus. `.replace('        ', ''),
      tags: ['current'],
      time: new Date('January 18, 2018 12:30:00').toISOString()
    },
    {
      title: `We Won Sportsball`,
      byline: `We won a game of sportsball 10-0.`,
      url: `#`,
      thumbnail: `test3.jpg`,
      content: `Earlier today, we won a game of sportsball. Details:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id nulla at felis rhoncus efficitur et sed ligula. Nunc vel auctor eros, eget facilisis erat. Nulla eu augue vel lorem aliquet semper. Nunc ultrices turpis sollicitudin sapien sodales, id sagittis tellus efficitur. Mauris pharetra sem elit, in cursus odio iaculis sed. Maecenas ullamcorper dictum mi eu eleifend. Nulla ultricies ante at ipsum porttitor interdum. Mauris faucibus finibus nulla sit amet pharetra. Pellentesque mollis vestibulum odio ac tristique. Morbi nulla sapien, varius vel eleifend nec, fringilla a dui.

        Praesent suscipit quam et ante mattis, non venenatis orci commodo. Aenean vehicula egestas nisi et elementum. Praesent volutpat lectus vel tortor ultricies porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras accumsan ornare odio. Etiam sed mollis nibh. Maecenas ut felis pellentesque, vehicula turpis luctus, malesuada diam.

        In eget molestie sem. Suspendisse mauris mi, vehicula nec risus at, sollicitudin sodales ipsum. Nunc sed odio nec sapien sodales gravida. Aenean facilisis erat quis sapien gravida cursus. Sed imperdiet pellentesque tincidunt. Praesent semper, nibh in placerat pharetra, ligula dui sagittis ligula, quis mattis velit metus eu nisl. Nulla aliquam aliquet tortor, ac consectetur arcu interdum vitae.

        Maecenas quis eleifend nunc, vel egestas neque. Duis vitae nibh sapien. Cras ut orci pellentesque, vulputate lorem sit amet, posuere augue. Praesent id placerat diam, ac rutrum eros. Etiam ac finibus odio, ullamcorper consectetur velit. Aliquam scelerisque scelerisque quam, ut varius est rhoncus non. Aenean vulputate eros ante. Nulla vel volutpat metus, ac gravida eros. Phasellus sagittis, leo eu dignissim pharetra, felis massa aliquet velit, at efficitur enim velit nec leo. Fusce malesuada   vehicula libero, eu condimentum metus suscipit nec. Aenean molestie tellus eu elit iaculis commodo. Pellentesque ut ex eget enim volutpat varius non eget urna. Sed placerat felis nibh, venenatis sollicitudin erat vulputate ut.

        Integer venenatis tempor dolor et consectetur. Nam tristique sodales arcu id faucibus. Sed ac lacus quis tortor vehicula feugiat quis at quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ultrices ipsum tellus, eget tincidunt odio facilisis scelerisque. Ut quis ante ac risus volutpat laoreet nec eu tellus. Nunc at fringilla dui. Nulla facilisi. Pellentesque vel sodales tellus, hendrerit commodo dolor. Proin pretium vulputate maximus. `.replace('        ', ''),
      tags: ['sports'],
      time: new Date('January 17, 2018 16:30:00').toISOString()
    },
    {
      title: `We Won Ballsport`,
      byline: `Our ballsport team scored 15 points in the last half.`,
      url: `#`,
      thumbnail: `test2.jpg`,
      content: `A few moments ago, we won a game of Ballsport. Details:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id nulla at felis rhoncus efficitur et sed ligula. Nunc vel auctor eros, eget facilisis erat. Nulla eu augue vel lorem aliquet semper. Nunc ultrices turpis sollicitudin sapien sodales, id sagittis tellus efficitur. Mauris pharetra sem elit, in cursus odio iaculis sed. Maecenas ullamcorper dictum mi eu eleifend. Nulla ultricies ante at ipsum porttitor interdum. Mauris faucibus finibus nulla sit amet pharetra. Pellentesque mollis vestibulum odio ac tristique. Morbi nulla sapien, varius vel eleifend nec, fringilla a dui.

        Praesent suscipit quam et ante mattis, non venenatis orci commodo. Aenean vehicula egestas nisi et elementum. Praesent volutpat lectus vel tortor ultricies porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras accumsan ornare odio. Etiam sed mollis nibh. Maecenas ut felis pellentesque, vehicula turpis luctus, malesuada diam.

        In eget molestie sem. Suspendisse mauris mi, vehicula nec risus at, sollicitudin sodales ipsum. Nunc sed odio nec sapien sodales gravida. Aenean facilisis erat quis sapien gravida cursus. Sed imperdiet pellentesque tincidunt. Praesent semper, nibh in placerat pharetra, ligula dui sagittis ligula, quis mattis velit metus eu nisl. Nulla aliquam aliquet tortor, ac consectetur arcu interdum vitae.

        Maecenas quis eleifend nunc, vel egestas neque. Duis vitae nibh sapien. Cras ut orci pellentesque, vulputate lorem sit amet, posuere augue. Praesent id placerat diam, ac rutrum eros. Etiam ac finibus odio, ullamcorper consectetur velit. Aliquam scelerisque scelerisque quam, ut varius est rhoncus non. Aenean vulputate eros ante. Nulla vel volutpat metus, ac gravida eros. Phasellus sagittis, leo eu dignissim pharetra, felis massa aliquet velit, at efficitur enim velit nec leo. Fusce malesuada   vehicula libero, eu condimentum metus suscipit nec. Aenean molestie tellus eu elit iaculis commodo. Pellentesque ut ex eget enim volutpat varius non eget urna. Sed placerat felis nibh, venenatis sollicitudin erat vulputate ut.

        Integer venenatis tempor dolor et consectetur. Nam tristique sodales arcu id faucibus. Sed ac lacus quis tortor vehicula feugiat quis at quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ultrices ipsum tellus, eget tincidunt odio facilisis scelerisque. Ut quis ante ac risus volutpat laoreet nec eu tellus. Nunc at fringilla dui. Nulla facilisi. Pellentesque vel sodales tellus, hendrerit commodo dolor. Proin pretium vulputate maximus. `.replace('        ', ''),
      tags: ['sports'],
      time: new Date('January 17, 2018 16:30:00').toISOString()
    },
    {
      title: `Something That's Both`,
      byline: `I can't be bothered to come up with another thing.`,
      url: `#`,
      thumbnail: `test3.jpg`,
      content: `IDK, this is just to prove you can have multiple tags. Details:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id nulla at felis rhoncus efficitur et sed ligula. Nunc vel auctor eros, eget facilisis erat. Nulla eu augue vel lorem aliquet semper. Nunc ultrices turpis sollicitudin sapien sodales, id sagittis tellus efficitur. Mauris pharetra sem elit, in cursus odio iaculis sed. Maecenas ullamcorper dictum mi eu eleifend. Nulla ultricies ante at ipsum porttitor interdum. Mauris faucibus finibus nulla sit amet pharetra. Pellentesque mollis vestibulum odio ac tristique. Morbi nulla sapien, varius vel eleifend nec, fringilla a dui.

        Praesent suscipit quam et ante mattis, non venenatis orci commodo. Aenean vehicula egestas nisi et elementum. Praesent volutpat lectus vel tortor ultricies porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras accumsan ornare odio. Etiam sed mollis nibh. Maecenas ut felis pellentesque, vehicula turpis luctus, malesuada diam.

        In eget molestie sem. Suspendisse mauris mi, vehicula nec risus at, sollicitudin sodales ipsum. Nunc sed odio nec sapien sodales gravida. Aenean facilisis erat quis sapien gravida cursus. Sed imperdiet pellentesque tincidunt. Praesent semper, nibh in placerat pharetra, ligula dui sagittis ligula, quis mattis velit metus eu nisl. Nulla aliquam aliquet tortor, ac consectetur arcu interdum vitae.

        Maecenas quis eleifend nunc, vel egestas neque. Duis vitae nibh sapien. Cras ut orci pellentesque, vulputate lorem sit amet, posuere augue. Praesent id placerat diam, ac rutrum eros. Etiam ac finibus odio, ullamcorper consectetur velit. Aliquam scelerisque scelerisque quam, ut varius est rhoncus non. Aenean vulputate eros ante. Nulla vel volutpat metus, ac gravida eros. Phasellus sagittis, leo eu dignissim pharetra, felis massa aliquet velit, at efficitur enim velit nec leo. Fusce malesuada   vehicula libero, eu condimentum metus suscipit nec. Aenean molestie tellus eu elit iaculis commodo. Pellentesque ut ex eget enim volutpat varius non eget urna. Sed placerat felis nibh, venenatis sollicitudin erat vulputate ut.

        Integer venenatis tempor dolor et consectetur. Nam tristique sodales arcu id faucibus. Sed ac lacus quis tortor vehicula feugiat quis at quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ultrices ipsum tellus, eget tincidunt odio facilisis scelerisque. Ut quis ante ac risus volutpat laoreet nec eu tellus. Nunc at fringilla dui. Nulla facilisi. Pellentesque vel sodales tellus, hendrerit commodo dolor. Proin pretium vulputate maximus. `.replace('        ', ''),
      tags: ['current', 'sports'],
      time: new Date('January 17, 2018 16:30:00').toISOString()
    },]);
    assert.equal(5, r.insertedCount);

    // Close connection
    client.close();
  } catch (err) {
    console.log(err.stack);
  }
}
a();
