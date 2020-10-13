# -*- encoding: utf-8 -*-
# stub: railties 5.2.4.4 ruby lib

Gem::Specification.new do |s|
  s.name = "railties".freeze
  s.version = "5.2.4.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "changelog_uri" => "https://github.com/rails/rails/blob/v5.2.4.4/railties/CHANGELOG.md", "source_code_uri" => "https://github.com/rails/rails/tree/v5.2.4.4/railties" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["David Heinemeier Hansson".freeze]
  s.bindir = "exe".freeze
  s.date = "2020-09-09"
  s.description = "Rails internals: application bootup, plugins, generators, and rake tasks.".freeze
  s.email = "david@loudthinking.com".freeze
  s.executables = ["rails".freeze]
  s.files = ["exe/rails".freeze]
  s.homepage = "http://rubyonrails.org".freeze
  s.licenses = ["MIT".freeze]
  s.rdoc_options = ["--exclude".freeze, ".".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.2.2".freeze)
  s.rubygems_version = "3.1.2".freeze
  s.summary = "Tools for creating, working with, and running Rails applications.".freeze

  s.installed_by_version = "3.1.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<activesupport>.freeze, ["= 5.2.4.4"])
    s.add_runtime_dependency(%q<actionpack>.freeze, ["= 5.2.4.4"])
    s.add_runtime_dependency(%q<rake>.freeze, [">= 0.8.7"])
    s.add_runtime_dependency(%q<thor>.freeze, [">= 0.19.0", "< 2.0"])
    s.add_runtime_dependency(%q<method_source>.freeze, [">= 0"])
    s.add_development_dependency(%q<actionview>.freeze, ["= 5.2.4.4"])
  else
    s.add_dependency(%q<activesupport>.freeze, ["= 5.2.4.4"])
    s.add_dependency(%q<actionpack>.freeze, ["= 5.2.4.4"])
    s.add_dependency(%q<rake>.freeze, [">= 0.8.7"])
    s.add_dependency(%q<thor>.freeze, [">= 0.19.0", "< 2.0"])
    s.add_dependency(%q<method_source>.freeze, [">= 0"])
    s.add_dependency(%q<actionview>.freeze, ["= 5.2.4.4"])
  end
end
