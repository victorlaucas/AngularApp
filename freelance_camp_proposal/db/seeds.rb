10.times do |proposal|
  Proposal.create!(
    customer: "Customer #{proposal}" ,
    portfolio_url:'http://vl-portfolio-project.herokuapp.com',
    tools: "Ruby on Rails, Angular 4, and Postgresql",
    estimated_hours: (80 + proposal),
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: 'example@example.com'
  )
end 