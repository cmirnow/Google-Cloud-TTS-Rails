# -*- encoding: utf-8 -*-
# stub: simple_form 5.0.3 ruby lib

Gem::Specification.new do |s|
  s.name = "simple_form".freeze
  s.version = "5.0.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Jos\u00E9 Valim".freeze, "Carlos Ant\u00F4nio".freeze, "Rafael Fran\u00E7a".freeze]
  s.date = "2020-09-30"
  s.description = "Forms made easy!".freeze
  s.email = "heartcombo@googlegroups.com".freeze
  s.homepage = "https://github.com/heartcombo/simple_form".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.3.0".freeze)
  s.rubygems_version = "3.1.2".freeze
  s.summary = "Forms made easy!".freeze

  s.installed_by_version = "3.1.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<activemodel>.freeze, [">= 5.0"])
    s.add_runtime_dependency(%q<actionpack>.freeze, [">= 5.0"])
  else
    s.add_dependency(%q<activemodel>.freeze, [">= 5.0"])
    s.add_dependency(%q<actionpack>.freeze, [">= 5.0"])
  end
end
