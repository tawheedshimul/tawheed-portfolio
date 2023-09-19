import React from 'react';

const Movies = () => {
  const people = [

    {
      name: 'Avenger Endgame',
      role: 'Marvel/ Hollywood',
      imageUrl:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
    },
    {
      name: 'Inception',
      role: 'Hollywood',
      imageUrl:
        'https://i.ibb.co/Y7012fv/inception.jpg',
    },
    {
      name: 'SM No way Home',
      role: 'Marvel/ Hollywood',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z',
    },
    {
      name: 'Thor Ragnarok',
      role: 'Marvel/ Hollywood',
      imageUrl:
        'https://i.ibb.co/JHHxXrt/thor-ragnarok.jpg',
    },
    {
      name: 'Debdas',
      role: 'Hindi',
      imageUrl:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTZW5PQjXBirbBKLSweGzz687fUrMHOwHjTO3rj5nGVNy7J6eH',
    },
    {
      name: 'Bahubali',
      role: 'Hindi',
      imageUrl:
        'https://i.ibb.co/H48vXCs/bahubali.jpg',
    },
  ]
  return (
    <div className="bg-white mx-auto dark:bg-black py-24 sm:py-32">
      <div className="mx-auto  grid w-full gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="w-full">
          <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">Tawheed love to Watch Movies</h2>
          <p className="mt-6 text-lg leading-8 text-justify text-gray-600 dark:text-gray-200">
            Tawheed love to watch sci fi movies also love romantic movies. Here you see some tawheed favourite movies...
          </p>
        </div>
        <div role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <div key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-40 w-36 rounded" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight dark:text-white text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;