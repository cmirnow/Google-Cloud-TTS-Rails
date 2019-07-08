# -*- encoding: utf-8 -*-
# stub: unobtrusive_flash 3.3.1 ruby lib

Gem::Specification.new do |s|
  s.name = "unobtrusive_flash".freeze
  s.version = "3.3.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Leonid Shevtsov".freeze]
  s.date = "2016-11-17"
  s.description = "unobtrusive_flash takes your flash messages for the backend and automagically passes them to the frontend via HTTP cookies.\nThis works with both regular page loads and AJAX requests, does not tamper with the page body and requires about 3 extra\nlines of code in your app - how's that for unobtrusive?\n".freeze
  s.email = ["leonid@shevtsov.me".freeze]
  s.homepage = "https://github.com/leonid-shevtsov/unobtrusive_flash".freeze
  s.rubygems_version = "2.7.3".freeze
  s.summary = "Unobtrusive flash messages for Rails".freeze

  s.installed_by_version = "2.7.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<railties>.freeze, [">= 0"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.3"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3"])
      s.add_development_dependency(%q<rspec-mocks>.freeze, ["~> 3"])
      s.add_development_dependency(%q<appraisal>.freeze, [">= 0"])
      s.add_development_dependency(%q<capybara>.freeze, [">= 2.5"])
      s.add_development_dependency(%q<poltergeist>.freeze, [">= 1.10.0"])
    else
      s.add_dependency(%q<railties>.freeze, [">= 0"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3"])
      s.add_dependency(%q<rspec-mocks>.freeze, ["~> 3"])
      s.add_dependency(%q<appraisal>.freeze, [">= 0"])
      s.add_dependency(%q<capybara>.freeze, [">= 2.5"])
      s.add_dependency(%q<poltergeist>.freeze, [">= 1.10.0"])
    end
  else
    s.add_dependency(%q<railties>.freeze, [">= 0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3"])
    s.add_dependency(%q<rspec-mocks>.freeze, ["~> 3"])
    s.add_dependency(%q<appraisal>.freeze, [">= 0"])
    s.add_dependency(%q<capybara>.freeze, [">= 2.5"])
    s.add_dependency(%q<poltergeist>.freeze, [">= 1.10.0"])
  end
end
