require 'rake'
require 'erb'

desc 'generate a new working space'
task :create, :name do |task, args|

  name = args[:name]

  if File.exist?("./#{name}")
    puts "./#{name} already exist!"
    exit
  end

  cp_r './template', "./#{name}"

  template = File.read "./#{name}/index.html.erb"

  html = ERB.new(template).result(binding)

  File.open("./#{name}/index.html", 'w') {|f| f.write(html)}

  rm "./#{name}/index.html.erb"

end