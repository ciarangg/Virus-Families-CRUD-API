
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('virus_families').del()
    .then(function () {
      // Inserts seed entries
      return knex('virus_families').insert([
        {
          id: 1,
          name: "Baculoviridae",
          genome_type: "ds DNA",
          genome_length: "90,000-230,000 bp",
          enveloped: "yes",
          host: "invertebrates",
        },
        {
          id: 2,
          name: "Herpesviridae",
          genome_type: "ds DNA",
          genome_length: "120,000-220,000 bp",
          enveloped: "yes",
          host: "vertebrates",
        },
        {
          id: 3,
          name: "Poxviridae",
          genome_type: "ds DNA",
          genome_length: "130,000-375,000 bp",
          enveloped: "yes",
          host: "invertebrates and vertebrates",
        },
        {
          id: 4,
          name: "Adenoviridae",
          genome_type: "ds DNA",
          genome_length: "30,000-42,000 bp",
          enveloped: "no",
          host: "vertebrates",
        },
        {
          id: 5,
          name: "Caulimoviridae",
          genome_type: "ds DNA",
          genome_length: "7,200-9,300 bp",
          enveloped: "no",
          host: "plants",
        },
        {
          id: 6,
          name: "Myoviridae",
          genome_type: "ds DNA",
          genome_length: "336,000 bp",
          enveloped: "no",
          host: "bacteria",
        },
        {
          id: 7,
          name: "Phycodnaviridae",
          genome_type: "ds DNA",
          genome_length: "250,000-350,000 bp",
          enveloped: "no",
          host: "algae",
        },
        {
          id: 8,
          name: "Tectiviridae",
          genome_type: "ds DNA",
          genome_length: "15,000 bp",
          enveloped: "no",
          host: "bacteria",
        },
        {
          id: 9,
          name: "Papillomaviridae",
          genome_type: "ds DNA",
          genome_length: "8,000 bp",
          enveloped: "no",
          host: "vertebrates (all mammals included)",
        },
        {
          id: 10,
          name: "Parvoviridae",
          genome_type: "ss DNA",
          genome_length: "5,000 bp",
          enveloped: "no",
          host: "invertebrates and vertebrates",
        },
        {
          id: 11,
          name: "Hepadnaviridae",
          genome_type: "ds/ss DNA",
          genome_length: "1,700-2,800 bp",
          enveloped: "yes",
          host: "vertebrates",
        },
        {
          id: 12,
          name: "Cystoviridae",
          genome_type: "ds positive nonsegmented RNA",
          genome_length: "13,379 bp",
          enveloped: "yes",
          host: "bacteria",
        },
        {
          id: 13,
          name: "Reoviridae",
          genome_type: "ds positive segmented RNA",
          genome_length: "18,200-30,500 bp",
          enveloped: "no",
          host: "invertebrates, plants, and vertebrates",
        },
        {
          id: 14,
          name: "Coronaviridae",
          genome_type: "ss positive nonsegmented RNA",
          genome_length: "26,000-32,000 bp",
          enveloped: "yes",
          host: "mammals and birds",
        },
        {
          id: 15,
          name: "Flaviviridae",
          genome_type: "ss positive nonsegmented RNA",
          genome_length: "10,000-11,000 bp",
          enveloped: "yes",
          host: "vertebrates",
        },
        {
          id: 16,
          name: "Togaviridae",
          genome_type: "ss positive nonsegmented RNA",
          genome_length: "9,700-11,800 bp",
          enveloped: "yes",
          host: "vertebrates and plants",
        },
        {
          id: 17,
          name: "Astroviridae",
          genome_type: "ss positive nonsegmented RNA",
          genome_length: "6,800-7,900 bp",
          enveloped: "no",
          host: "vertebrates",
        },
        {
          id: 18,
          name: "Caliciviridae",
          genome_type: "ss positive nonsegmented RNA",
          genome_length: "7,900 bp",
          enveloped: "no",
          host: "vertebrates and invertebrates",
        },
        {
          id: 19,
          name: "Picornaviridae",
          genome_type: "ss positive nonsegmented RNA",
          genome_length: "7,500 bp",
          enveloped: "no",
          host: "vertebrates",
        },
        {
          id: 20,
          name: "Potyviridae",
          genome_type: "ss positive nonsegmented RNA",
          genome_length: "8,500-10,000 bp",
          enveloped: "no",
          host: "plants",
        },
        {
          id: 21,
          name: "Retroviridae",
          genome_type: "ss positive nonsegmented RNA",
          genome_length: "7,000-11,000",
          enveloped: "yes",
          host: "vertebrates",
        },
        {
          id: 22,
          name: "Orthomyxoviridae",
          genome_type: "ss negative segmented RNA",
          genome_length: "12,000-15,000 bp",
          enveloped: "yes",
          host: "vertebrates",
        },
        {
          id: 23,
          name: "Filoviridae",
          genome_type: "ss negative nonsegmented RNA",
          genome_length: "19,000",
          enveloped: "yes",
          host: "vertebrates",
        },
        {
          id: 24,
          name: "Paramyxoviridae",
          genome_type: "ss negative nonsegmented RNA",
          genome_length: "15,200-15,900 bp",
          enveloped: "yes",
          host: "vertebrates",
        },
        {
          id: 25,
          name: "Rhabdoviridae",
          genome_type: "ss negative nonsegmented RNA",
          genome_length: "11,000-15,000 bp",
          enveloped: "yes",
          host: "invertebrates, plants, and vertebrates",
        },
        {
          id: 26,
          name: "Arenaviridae",
          genome_type: "ss negative/ambisense nonsegmented RNA",
          genome_length: "5,000-7,400 bp",
          enveloped: "yes",
          host: "vertebrates",
        },
        {
          id: 27,
          name: "Bunyaviridae",
          genome_type: "ss negative/ambisense nonsegmented RNA",
          genome_length: "10,500-22,700 bp",
          enveloped: "yes",
          host: "vertebrates and plants",
        },
        {
          id: 28,
          name: "Polyomaviridae",
          genome_type: "ds DNA",
          genome_length: "5,000 bp",
          enveloped: "no",
          host: "mammals and birds",
        },
      ]);
    }) .then(() => {
      return knex.raw("ALTER SEQUENCE virus_families_id_seq RESTART WITH 29;");
    });
};
