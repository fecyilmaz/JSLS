const data = [
  { title: "Queue Name", value: queue.queue },
  { title: "Total Calls", value: queue.numberofcalls },
  { title: "Short Calls", value: queue.shortcalls },
  { title: "Answered", value: queue.answered },
  { title: "Abandoned", value: queue.abandoned },
  { title: "Answer Speed", value: queue.answerspeed },
  { title: "Talking Duration", value: queue.talkduration },
  { title: "Outbound Calls", value: queue.succesfulloutbound },
  { title: "Outbound Att", value: queue.numberofoutbound }
  //yazım hataları olabilir sorry
];

return (
  <div>
    {data.map((item, index) => (
      <DetailLine key={index} title={item.title} value={item.value} />
    ))}
  </div>
);